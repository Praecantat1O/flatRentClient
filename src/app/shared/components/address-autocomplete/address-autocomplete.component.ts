import { Component, OnDestroy, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Address } from 'src/app/models/address.model';
import { debounceTime, distinctUntilChanged, Observable, Subscription, take } from 'rxjs';
import { addressSearchAutocomplete, addressSuggestionsClear } from 'src/app/store/app.actions';
import { getAddressesSuggestions } from 'src/app/store/app.selectors';
import { AppState } from 'src/app/store/app.state';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-autocomplete',
  templateUrl: './address-autocomplete.component.html',
  styleUrls: ['./address-autocomplete.component.scss'],
})
export class AddressAutocompleteComponent implements OnInit, OnDestroy {
  constructor(private store: Store<AppState>) { }

  public form = new FormGroup({
    address: new FormControl(''),
  });

  @ViewChild('autoInput', { static: true }) input: any;
  @Output() selectAddress = new EventEmitter<Address>();

  public addressSuggestions$: Observable<Address[]>;
  public inputValue$: Subscription;

  public isNeedFocus: boolean = true;
  public isSelectCalled: boolean = false;

  public addressSuggestions: Address[];
  public selectedAddress: Address;

  ngOnInit(): void {
    this.addressSuggestions$ = this.store.select(getAddressesSuggestions);

    this.inputValue$ = this.form.get('address')
      .valueChanges.pipe(
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((value: string) => {
        this.input.nativeElement.blur()

        if (this.isSelectCalled) {
          this.isNeedFocus = false;
          this.isSelectCalled = false;
        } else {
          this.store.dispatch(addressSearchAutocomplete({ addressToSearch: value }));
          this.isSelectCalled = false;
          this.isNeedFocus = true;
        }

        if (this.isNeedFocus) {
          setTimeout(() => {
            this.input.nativeElement.focus();
          }, 750)
        }
      });
  }

  public ngOnDestroy(): void {
    this.inputValue$.unsubscribe();
  }

  public onSelectAddress(value: any): void {
    // TODO LOADING
    if (value !== '') {
      this.addressSuggestions$.pipe(take(1)).subscribe(suggestions => this.addressSuggestions = suggestions);
      this.selectedAddress = this.addressSuggestions.find(address => address.addressStr === value);
      this.isNeedFocus = false;
      this.isSelectCalled = true;
      this.store.dispatch(addressSuggestionsClear());
      this.selectAddress.emit(this.selectedAddress);
    }
  }

}
