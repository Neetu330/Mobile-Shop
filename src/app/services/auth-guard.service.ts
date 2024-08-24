import { Injectable } from '@angular/core';
import { CanActivate ,ActivatedRouteSnapshot, RouterStateSnapshot,Router} from '@angular/router';
import { MasterService } from './master.service';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor( private router:Router, private masterService : MasterService) { 
    this.handlePageRefresh();
  }

  handlePageRefresh(): void {
    // Clear session storage on refresh
    window.addEventListener('beforeunload', () => {
      sessionStorage.clear();
    });

    // Redirect to login if no session exists
    window.addEventListener('load', () => {
      if (!sessionStorage.getItem('userId')) {
        this.router.navigate(['/login']);
      }
    });
  }
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.isLoggedIn()){
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }

  isLoggedIn() : boolean{
    let status = false;
    if(sessionStorage.getItem('LoggedInStatus')== "true"){
      status = true;
    }else{
      status = false;
    }
    return status;
  }
}
