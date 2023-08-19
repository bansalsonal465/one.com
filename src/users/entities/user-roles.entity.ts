import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"; 

@Entity({name: 'user_roles'}) 
export class UserRoles {   

   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Column() 
   user_id: number; 
   
   @Column() 
   role_id:  number; 
}