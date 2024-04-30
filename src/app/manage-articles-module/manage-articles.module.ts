import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'; 
import { ManageArticlesComponent } from './manage_arcticles/manage-articles/manage-articles.component';
import { SearchArticlesComponent } from './manage_arcticles/search-articles/search-articles.component';
import { ProofNewslettersComponent } from './manage_arcticles/select-concept/proof-newsletters/proof-newsletters.component';
import { SelectConceptComponent } from './manage_arcticles/select-concept/select-concept.component';
import { ViewArticlesComponent } from './manage_arcticles/view-articles/view-articles.component';
import { AiArticleComponent } from './manage_arcticles/write-an-article/ai-article/ai-article.component';
import { ArticlesDetailsComponent } from './manage_arcticles/write-an-article/articles-details/articles-details.component';
import { PreviewArticleComponent } from './manage_arcticles/write-an-article/preview-article/preview-article.component';
import { SimpleArticleComponent } from './manage_arcticles/write-an-article/simple-article/simple-article.component';
import { WriteAnArticleComponent } from './manage_arcticles/write-an-article/write-an-article.component';
// import { TruncatePipe } from '../Pipes/truncate.pipe'; 

import { ManageArticlesModuleRoutingModule } from './manage-articles-module-routing.module';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@progress/kendo-angular-editor';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

@NgModule({
  declarations: [
    ManageArticlesComponent,
    SearchArticlesComponent,
    ProofNewslettersComponent,
    SelectConceptComponent,
    ViewArticlesComponent,
    AiArticleComponent,
    ArticlesDetailsComponent,
    PreviewArticleComponent,
    WriteAnArticleComponent,
    SimpleArticleComponent,
    // TruncatePipe
  ],
  imports: [
    SharedModule,
    ManageArticlesModuleRoutingModule,
    FormsModule,
    EditorModule,
    InputsModule,
    DateInputsModule
  ]
})
export class ManageArticlesModule { }
