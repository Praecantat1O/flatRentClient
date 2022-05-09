import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IFlatUser } from 'src/app/interfaces/flat-user.interface';
import { Flat } from 'src/app/models/flat.model';
import { User } from 'src/app/models/user.model';
import {
  bathroomDevicesFields,
  flatDevicesMap,
  homeDevicesFields,
  kitchenDevicesFields,
} from 'src/app/shared/helpers/flat-fields.helper';
import { loadFlatPage } from 'src/app/store/app.actions';
import { getFlatPage } from 'src/app/store/app.selectors';
import { AppState } from 'src/app/store/app.state';
import { EntityStatus, StateEntity } from 'src/app/store/state.helpers';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.scss'],
})
export class FlatComponent implements OnInit, OnDestroy {
  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  public flat: Flat;
  public user: User;

  public flatPage$: Observable<StateEntity<IFlatUser>>;

  public homeDevicesFields = homeDevicesFields;
  public bathroomDevicesFields = bathroomDevicesFields;
  public kitchenDevicesFields = kitchenDevicesFields;
  public devicesMap = flatDevicesMap;

  private sub$: Subscription;

  public ngOnInit(): void {
    const flatId = this.route.snapshot.paramMap.get('id');

    this.store.dispatch(loadFlatPage({ id: flatId }));

    this.flatPage$ = this.store.select(getFlatPage);

    this.sub$ = this.flatPage$.subscribe((flatPage) => {
      if (flatPage.status === EntityStatus.Success) {
        this.flat = flatPage.value.flat;
        this.user = flatPage.value.user;
      }
    });
  }

  public ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
