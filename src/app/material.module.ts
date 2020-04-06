import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatTableModule,
    MatExpansionModule,
    MatTabsModule,
    MatTooltipModule,
    MatIconModule
  ],
  providers: [
    MatIconRegistry
  ],
  exports: [
    BrowserAnimationsModule,
    MatTableModule,
    MatExpansionModule,
    MatTooltipModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class MaterialModule {
    constructor(
        public matIconRegistry: MatIconRegistry) 
    {
        matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
 }
