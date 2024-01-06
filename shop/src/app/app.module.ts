import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CartComponent } from './components/cart/cart.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapCart4, bootstrapInfoCircleFill, bootstrapList, bootstrapTrash3 } from '@ng-icons/bootstrap-icons';
import { cssAdd } from '@ng-icons/css.gg';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { LightboxDirective } from './directives/lightbox.directive';
import { UsdToEgpPipe } from './pipe/usd-to-egp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CartComponent,
    ProductListComponent,
    LightboxDirective,
    UsdToEgpPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgIconsModule.withIcons({ 
      bootstrapCart4, bootstrapTrash3, bootstrapInfoCircleFill,bootstrapList,cssAdd}),
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
