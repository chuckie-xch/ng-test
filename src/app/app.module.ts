import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroChildComponent } from './component-interaction/hero-child/hero-child.component';
import { HeroParentComponent } from './component-interaction/hero-parent/hero-parent.component';
import { NameChildComponent } from './component-interaction/name-child/name-child.component';
import { NameParentComponent } from './component-interaction/name-parent/name-parent.component';
import { VersionChildComponent } from './component-interaction/version-child/version-child.component';
import { VersionParentComponent } from './component-interaction/version-parent/version-parent.component';
import { VoterComponent } from './component-interaction/voter/voter.component';
import { VoteTakerComponent } from './component-interaction/vote-taker/vote-taker.component';
import { CountdownTimerComponent } from './component-interaction/countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './component-interaction/countdown-parent/countdown-parent.component';
import { CountdownParentVcComponent } from './component-interaction/countdown-parent-vc/countdown-parent-vc.component';
import { MissionControlComponent } from './component-interaction/mission-control/mission-control.component';
import { AstronautComponent } from './component-interaction/astronaut/astronaut.component';
import { PopupComponent } from './custom-element/popup/popup.component';
import { PopupControlComponent } from './custom-element/popup-control/popup-control.component';
import { AdDirective } from './dynamic-component/ad.directive';
import { AdBannerComponent } from './dynamic-component/ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './dynamic-component/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './dynamic-component/hero-profile/hero-profile.component';
import { AdListComponent } from './dynamic-component/ad-list/ad-list.component';
import { AdService } from './dynamic-component/ad.service';
import { HighlightDirective } from './attribute-directives/highlight.directive';
import { UnlessDirective } from './structural-directives/unless.directive';
import { UnlessControlComponent } from './structural-directives/unless-control/unless-control.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { ExponentialControlComponent } from './pipes/exponential-control/exponential-control.component';
import { PowerBoostCalculatorComponent } from './pipes/power-boost-calculator/power-boost-calculator.component';
import { FlyingHeroesComponent } from './pipes/flying-heroes/flying-heroes.component';
import { FlyingHeroesPipe } from './pipes/flying-heroes.pipe';
import { HeroAsyncMessageComponent } from './pipes/hero-async-message/hero-async-message.component';
import { LoopBackComponent } from './forms/user-input/loop-back/loop-back.component';
import { LittleTourComponent } from './forms/user-input/little-tour/little-tour.component';
import { HeroFormComponent } from './forms/template-driven/hero-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VoteTakerComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
    CountdownParentVcComponent,
    MissionControlComponent,
    AstronautComponent,
    PopupComponent,
    PopupControlComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdListComponent,
    HighlightDirective,
    UnlessDirective,
    UnlessControlComponent,
    ExponentialStrengthPipe,
    ExponentialControlComponent,
    PowerBoostCalculatorComponent,
    FlyingHeroesComponent,
    FlyingHeroesPipe,
    HeroAsyncMessageComponent,
    LoopBackComponent,
    LittleTourComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AdService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    HeroProfileComponent, HeroJobAdComponent
  ]
})
export class AppModule { }
