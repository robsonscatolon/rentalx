import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid"

@Entity("users")
class Users {
    @PrimaryColumn()
    id: String;

    @Column()
    name: String;

    @Column()
    email: String;

    @Column()
    password: String;

    @Column()
    driver_license: String;

    @Column()
    isAdmin: Boolean;

    @Column()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }

}

export { Users }