import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Manage Content' },
    children: [
      {
        path: 'write_an_article',
        component: WriteAnArticleComponent,
        data: { breadcrumb: 'Write an Article' },
      },
      {
        path: 'simple_artile',
        component: SimpleArticleComponent,
        data: { breadcrumb: 'Write an Article' },
      },
      {
        path: 'simple_artile/:id',
        component: SimpleArticleComponent,
        data: { breadcrumb: 'Write an Article' },
      },
      {
        path: 'ai_artile',
        component: AiArticleComponent,
        data: { breadcrumb: 'Write an Article' },
      },
      {
        path: 'ai_artile/:id',
        component: AiArticleComponent,
        data: { breadcrumb: 'Write an Article' },
      },
      {
        path: 'artile_details',
        component: ArticlesDetailsComponent,
        data: { breadcrumb: 'Write an Article' },
      },
      {
        path: 'artile_preview',
        component: PreviewArticleComponent,
        data: { breadcrumb: 'Write an Article' },
      },
      {
        path: 'manage_article',
        component: ManageArticlesComponent,
        data: { breadcrumb: 'Manage Articles' },
      },
      {
        path: 'view_article/:id',
        component: ViewArticlesComponent,
        data: { breadcrumb: 'View Articles' },
      },
      {
        path: 'search_article',
        component: SearchArticlesComponent,
        data: { breadcrumb: 'Search Articles' },
      },
      {
        path: 'select_concept',
        component: SelectConceptComponent,
        data: { breadcrumb: 'Select Concept' },
      },
      {
        path: 'proof_newsletters',
        component: ProofNewslettersComponent,
        data: { breadcrumb: 'Proof Newsletter' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageArticlesModuleRoutingModule { }
