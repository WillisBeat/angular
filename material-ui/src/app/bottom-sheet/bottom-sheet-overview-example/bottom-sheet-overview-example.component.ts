import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {MatListModule} from "@angular/material/list";

@Component({
  selector: 'app-bottom-sheet-overview-example',
  templateUrl: './bottom-sheet-overview-example.component.html',
  styleUrls: ['./bottom-sheet-overview-example.component.css']
})
export class BottomSheetOverviewExampleComponent {
  constructor(private _bottomSheet: MatBottomSheet) {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
