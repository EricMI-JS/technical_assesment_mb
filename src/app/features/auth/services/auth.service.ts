import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userState = new BehaviorSubject<any>(null);
  public user$ = this.userState.asObservable();

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    // Suscribirse a los cambios del estado de autenticación
    this.afAuth.authState.subscribe((user) => {
      this.userState.next(user);
    });
  }

  async login(email: string, password: string): Promise<any> {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
      this.router.navigate(['/login']);
    } catch (error) {
      throw error;
    }
  }

  getCurrentUser(): Observable<any> {
    return this.user$;
  }

  isAuthenticated(): boolean {
    return this.userState.value !== null;
  }
} 