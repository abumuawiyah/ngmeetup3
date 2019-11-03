import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BoxComponent } from "./components/box/box.component";
import { ThemeProviderComponent } from "./theme/theme-provider/theme-provider.component";
import { RoleProviderComponent } from "./role/role-provider/role-provider.component";
import { ChevronDownIconComponent } from "./svg/chevron-down-icon/chevron-down-icon.component";
import { ChevronUpIconComponent } from "./svg/chevron-up-icon/chevron-up-icon.component";
import { SettingIconComponent } from "./svg/setting-icon/setting-icon.component";
import { TypographyComponent } from "./components/typography/typography.component";
import { BuildIconComponent } from "./svg/build/build-icon.component";
import { DoneIconComponent } from "./svg/done/done-icon.component";
import { ButtonComponent } from "./components/button/button.component";
import { TextfieldComponent } from "./components/textfield/textfield.component";
import { CardComponent } from "./components/card/card.component";

@NgModule({
  declarations: [
    BoxComponent,
    ThemeProviderComponent,
    RoleProviderComponent,
    ChevronDownIconComponent,
    ChevronUpIconComponent,
    BuildIconComponent,
    DoneIconComponent,
    SettingIconComponent,
    TypographyComponent,
    ButtonComponent,
    TextfieldComponent,
    CardComponent
  ],
  imports: [CommonModule],
  exports: [
    BoxComponent,
    ThemeProviderComponent,
    RoleProviderComponent,
    ChevronDownIconComponent,
    ChevronUpIconComponent,
    BuildIconComponent,
    DoneIconComponent,
    SettingIconComponent,
    TypographyComponent,
    ButtonComponent,
    TextfieldComponent,
    CardComponent
  ]
})
export class AtomicComponentModule {}
