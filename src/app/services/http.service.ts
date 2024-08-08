import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'https://api.github.com/users'
  constructor(private http: HttpClient) { }

   // Méthode pour obtenir tous les utilisateurs
   getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

    // Méthode pour obtenir un utilisateur par ID
    getUserById(id: string): Observable<any> {
      return this.http.get(`${this.apiUrl}/${id}`);
    }


      // Méthode pour créer un nouvel utilisateur
  createUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  // Méthode pour mettre à jour un utilisateur
  updateUser(id: string, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  // Méthode pour supprimer un utilisateur
  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


}
