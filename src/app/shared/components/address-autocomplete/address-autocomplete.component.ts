import {
  Component,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
  ChangeDetectionStrategy,
  ElementRef,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Address } from 'src/app/models/address.model';
import { debounceTime, distinctUntilChanged, Observable, Subscription, take } from 'rxjs';
import { addressSearchAutocomplete, addressSearchClear, addressSuggestionsClear } from 'src/app/store/app.actions';
import { getAddressesSuggestions, isSuggestionsLoading } from 'src/app/store/app.selectors';
import { AppState } from 'src/app/store/app.state';
import { FormControl, FormGroup } from '@angular/forms';
import { EntityStatus, StateEntity } from 'src/app/store/state.helpers';

@Component({
  selector: 'app-address-autocomplete',
  templateUrl: './address-autocomplete.component.html',
  styleUrls: ['./address-autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressAutocompleteComponent implements OnInit, OnDestroy {
  constructor(private store: Store<AppState>) { }

  public form = new FormGroup({
    address: new FormControl(''),
  });

  @ViewChild('autoInput', { static: true }) input: ElementRef<HTMLInputElement>;
  @Output() selectAddress = new EventEmitter<Address>();


  public addressSuggestions$: Observable<StateEntity<Address[]>> = this.store.select(getAddressesSuggestions);
  public isLoading$: Observable<boolean> = this.store.select(isSuggestionsLoading);

  public inputValue$: Subscription;
  public addressSub$: Subscription;

  public isSelectCalled: boolean = false;
  public isSuggestionEmpty: boolean;


  public addressSuggestions: Address[];
  public selectedAddress: Address;

  ngOnInit(): void {
    this.inputValue$ = this.form
      .get('address')
      .valueChanges.pipe(
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((value: string) => {
        if (this.isSelectCalled) {
          this.isSelectCalled = false;
        } else {
          this.store.dispatch(addressSearchAutocomplete({ addressToSearch: value }));
          this.isSelectCalled = false;

        }
      });

    this.addressSub$ = this.addressSuggestions$.subscribe((suggestion) => {
      if (suggestion.status === EntityStatus.Pending) {
        this.input.nativeElement.blur();
      }

      if (suggestion.status === EntityStatus.Success) {
        this.input.nativeElement.focus();
      }

      if (!suggestion.value && suggestion.status === EntityStatus.Success) {
        this.isSuggestionEmpty = true;
      } else {
        this.isSuggestionEmpty = false;
      }
    })
  }

  public ngOnDestroy(): void {
    this.inputValue$.unsubscribe();
    this.addressSub$.unsubscribe();
  }

  public onSelectAddress(value: string): void {
    if (value !== '') {
      this.addressSuggestions$.pipe(take(1)).subscribe((suggestions) => (this.addressSuggestions = suggestions.value));
      this.selectedAddress = this.addressSuggestions.find((address) => address.addressStr === value);
      this.isSelectCalled = true;
      this.store.dispatch(addressSuggestionsClear());
      this.store.dispatch(addressSearchClear());
      this.selectAddress.emit(this.selectedAddress);
    }
  }
}
