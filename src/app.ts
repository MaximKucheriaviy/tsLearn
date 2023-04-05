class Key{
    protected signature: number
    constructor(){
        this.signature = Math.random();
    }
    public getSignature(): number{
        return this.signature
    }
}

class Person{
    constructor(private key: Key, public readonly name: string){

    }
    public getKey():Key{
        return this.key
    }
}

abstract class House{
    protected door: 'closed' | 'opened' = "closed"
    protected key: Key
    protected tenands: Person[] = []
    constructor(key: Key){
        this.key = key
    }
    public comeIn(person: Person): void{
        if(this.door === "closed"){
            console.log(`Sorry ${person.name} Thid door is closed! You can't come in`);
            return
        }
        this.tenands.push(person);
        console.log(`Welcome, ${person.name}`);
        
    }
    public showTenands():void {
        this.tenands.forEach(item => {
            console.log(item.name);
        })
    }
    public abstract openDoor(key: Key): void
}

class MyHouse extends House{
    constructor(key: Key){
        super(key)
    }
    public openDoor(key: Key): void {
        if(this.key.getSignature() === key.getSignature()){
            console.log("Door is opened");
            this.door = 'opened'
        }
        else{
            console.log("Sorry! Wrong key");
        }
    }
}

const key1 = new Key();
const key2 = new Key();

const house1 = new MyHouse(key1);

const Maxim = new Person(key1, "Maxim");
const Ruslana = new Person(key2, 'Ruslana');


house1.comeIn(Maxim);
house1.comeIn(Ruslana);
house1.openDoor(Ruslana.getKey());
house1.openDoor(Maxim.getKey());
house1.comeIn(Maxim);
house1.comeIn(Ruslana);
house1.showTenands();