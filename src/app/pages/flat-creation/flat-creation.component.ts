import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  bathroomDevicesFields,
  flatDevicesMap,
  homeDevicesFields,
  kitchenDevicesFields,
  roomsOptions,
} from 'src/app/shared/helpers/flat-fields.helper';
import { faBath, faFireBurner } from '@fortawesome/free-solid-svg-icons';
import { Address } from 'src/app/models/address.model';

@Component({
  selector: 'app-flat-creation',
  templateUrl: './flat-creation.component.html',
  styleUrls: ['./flat-creation.component.scss'],
})
export class FlatCreationComponent {
  constructor(private cdr: ChangeDetectorRef) { }

  public newFlatForm: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
      Validators.minLength(20),
    ]),
    rooms: new FormControl(1, [Validators.required]),
    floor: new FormControl('', [
      Validators.required,
      Validators.minLength(0),
      Validators.maxLength(60),
    ]),
    square: new FormControl('', [
      Validators.minLength(1),
      Validators.maxLength(5),
    ]),
    combinedBathroom: new FormControl(false, Validators.required),
    balcony: new FormControl(false, Validators.required),
    devices: new FormGroup({
      home: new FormGroup({
        wifi: new FormControl(false, Validators.required),
        tv: new FormControl(false, Validators.required),
        conditioner: new FormControl(false, Validators.required),
      }),
      bathroom: new FormGroup({
        shower: new FormControl(false, Validators.required),
        bath: new FormControl(false, Validators.required),
        washingMachine: new FormControl(false, Validators.required),
        dryer: new FormControl(false, Validators.required),
      }),
      kitchen: new FormGroup({
        fridge: new FormControl(false, Validators.required),
        microwave: new FormControl(false, Validators.required),
        dishwasher: new FormControl(false, Validators.required),
        kettle: new FormControl(false, Validators.required),
        coffee: new FormControl(false, Validators.required),
      }),
    }),
    description: new FormControl('', [Validators.required, Validators.maxLength(400), Validators.minLength(20)]),
    photosControl: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(5)]),
    photos: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required), // TODO!
  });

  public roomsOptions = roomsOptions;
  public homeDevicesFields = homeDevicesFields;
  public bathroomDevicesFields = bathroomDevicesFields;
  public kitchenDevicesFields = kitchenDevicesFields;
  public devicesMap = flatDevicesMap;

  public faBath = faBath;
  public faFireBurner = faFireBurner;

  public photoFiles: any[] = [];

  public onSubmit(): void {
    console.log(this.newFlatForm.value);
  }

  public onPhotoUpload(event: any): void {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      [...files].forEach((file: any, index) => {
        const reader = new FileReader();

        reader.onload = (item) => {
          const newFile = { id: index, img: item.target?.result as string };
          this.photoFiles = [...this.photoFiles, newFile];

          this.newFlatForm.patchValue({
            photos: this.photoFiles,
          });
        };

        reader.readAsDataURL(file);
        this.cdr.markForCheck();
      });
      event.target.value = null;
    }
  }

  public removeImg(id: number): void {
    this.photoFiles = this.photoFiles.filter((item) => item.id !== id);
    this.newFlatForm.patchValue({
      photos: this.photoFiles,
    });
    this.cdr.markForCheck();
  }

  public onSelectAddress(address: Address): void {
    this.newFlatForm.get('address').patchValue(address);
  }
}
