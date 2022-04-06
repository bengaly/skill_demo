import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { SkillListComponent } from './skill/skill-list/skill-list.component';
import { SkillFormComponent } from './skill/skill-form/skill-form.component';
import { skill_reducer } from './skill/skill.reducer';

import { SkillEffects } from './skill/skill-effects';
import { HttpClientModule } from '@angular/common/http';
import { DemoObsTimestampComponent } from './demos/demo-obs-timestamp/demo-obs-timestamp.component';
import { ProductModule } from './product/product.module';


@NgModule({
  declarations: [
    AppComponent,
    SkillListComponent,
    SkillFormComponent,
    DemoObsTimestampComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule,
    StoreModule.forRoot( { skills: skill_reducer } ),
    EffectsModule.forRoot([SkillEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
