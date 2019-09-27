import { NgModule } from '@angular/core';
import { 
    MatTableModule, 
    MatExpansionModule,
    MatTabsModule,
    MatTooltipModule,
    MatIconModule,
    MatIconRegistry
} from '@angular/material';
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
