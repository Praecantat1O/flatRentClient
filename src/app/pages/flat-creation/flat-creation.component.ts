import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  bathroomDevicesFields,
  flatDevicesMap,
  homeDevicesFields,
  kitchenDevicesFields,
  bedroomsOptions,
} from 'src/app/shared/helpers/flat-fields.helper';
import { faBath, faFireBurner } from '@fortawesome/free-solid-svg-icons';
import { Address } from 'src/app/models/address.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getCurrentUser } from 'src/app/store/app.selectors';
import { map, Observable, take } from 'rxjs';
import { createFlat } from 'src/app/store/app.actions';
import { IPhotoPreview } from 'src/app/interfaces/photo-preview.interface';
import { addressValidator } from 'src/app/shared/validators/address.validator';

@Component({
  selector: 'app-flat-creation',
  templateUrl: './flat-creation.component.html',
  styleUrls: ['./flat-creation.component.scss'],
})
export class FlatCreationComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef, private store: Store<AppState>) { }

  public newFlatForm: FormGroup;

  public bedroomsOptions = bedroomsOptions;
  public homeDevicesFields = homeDevicesFields;
  public bathroomDevicesFields = bathroomDevicesFields;
  public kitchenDevicesFields = kitchenDevicesFields;
  public devicesMap = flatDevicesMap;

  public faBath = faBath;
  public faFireBurner = faFireBurner;

  public photoPreview: IPhotoPreview[] = [];
  public photoFiles: File[] = [];

  public userId$: Observable<number> = this.store.select(getCurrentUser).pipe(map(user => user.value.id));

  public ngOnInit(): void {
    this.newFlatForm = new FormGroup({
      bedrooms: new FormControl(null, [Validators.required]),
      info: new FormGroup({
        floor: new FormControl(null, [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(3),
          Validators.min(-2),
          Validators.max(100),
        ]),
        square: new FormControl(null, [
          Validators.maxLength(5),
          Validators.min(1),
          Validators.max(100000),
        ]),
        combinedBathroom: new FormControl(false),
        balcony: new FormControl(false),
      }),
      devices: new FormGroup({
        home: new FormGroup({
          wifi: new FormControl(false),
          tv: new FormControl(false),
          conditioner: new FormControl(false),
        }),
        bathroom: new FormGroup({
          shower: new FormControl(false),
          bath: new FormControl(false),
          washingMachine: new FormControl(false),
          dryer: new FormControl(false),
        }),
        kitchen: new FormGroup({
          fridge: new FormControl(false),
          microwave: new FormControl(false),
          dishwasher: new FormControl(false),
          kettle: new FormControl(false),
          coffee: new FormControl(false),
        }),
      }),
      description: new FormControl('', [Validators.required, Validators.maxLength(800), Validators.minLength(20)]),
      photosControl: new FormControl(''),
      photos: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
      address: new FormControl('', [Validators.required, addressValidator]),
      price: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
        Validators.min(1),
        Validators.max(10000),
      ]),
    });
  }

  public get photosErrors() {
    return this.newFlatForm.get('photos')?.errors;
  }

  public get descriptionErrors() {
    return this.newFlatForm.get('description')?.errors;
  }

  public onSubmit(): void {
    this.userId$.pipe(take(1)).subscribe(userId => {
      const formData = this.getFormData(userId);

      this.store.dispatch(createFlat({ formData }));
    })
  }

  public onPhotoUpload(event: Event): void {
    const files = (event.target as HTMLInputElement).files;

    if (files.length > 0) {
      this.photoFiles = this.getPhotoFiles(files);
      this.createPhotoPreview(files);

      this.cdr.markForCheck();

      (event.target as HTMLInputElement).value = null;
    }

    this.newFlatForm.get('photos').markAsTouched();
  }

  public removeImg(id: number): void {
    this.photoPreview = this.photoPreview.filter((item) => item.id !== id);
    this.photoFiles = this.photoFiles.filter((item, index) => index !== id);
    this.newFlatForm.patchValue({
      photos: this.photoPreview,
    });
    this.cdr.markForCheck();
  }

  public onSelectAddress(address: Address): void {
    this.newFlatForm.get('address').patchValue(address);
  }

  public touchControl(control: AbstractControl): void {
    control.markAsTouched();
  }

  private getPhotoFiles(files: FileList): File[] {
    const photos = [];
    for (let key in files) {
      if (files.hasOwnProperty(key)) {
        photos.push(files[key]);
      }
    }

    return photos;
  }

  private createPhotoPreview(files: FileList): void {
    [...files].forEach((file: any, index) => {
      const reader = new FileReader();

      reader.onload = (item) => {
        const newFile: IPhotoPreview = { id: index, img: item.target?.result as string };

        this.photoPreview = [...this.photoPreview, newFile];

        this.newFlatForm.patchValue({
          photos: this.photoPreview,
          photosControl: null,
        });
      };

      reader.readAsDataURL(file);
    });
  }

  private getFormData(userId: number): FormData {
    const formData = new FormData();

    const flat = JSON.stringify({
      price: this.newFlatForm.get('price').value,
      bedrooms: this.newFlatForm.get('bedrooms').value,
      description: this.newFlatForm.get('description').value,
      address: this.newFlatForm.get('address').value,
      userId,
    });
    const info = JSON.stringify(this.newFlatForm.get('info').value);
    const devices = JSON.stringify(this.newFlatForm.get('devices').value);

    this.photoFiles.forEach(photo => formData.append('photos', photo));
    formData.append('flat', flat);
    formData.append('info', info);
    formData.append('devices', devices);

    return formData;
  }
}
