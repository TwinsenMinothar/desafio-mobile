import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'; 
import { PostsComponent } from './posts/posts.component'
import {PostDetailComponent} from './post-detail/post-detail.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: PostDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
