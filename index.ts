type Crewmate = {
    name: string,
    role: string,
    bounty: number
}

type NewCrewmate = {
    crewmate: Crewmate,
    addedToTotalBounty: boolean
}




const crew: Crewmate[] = [
    { 
        name: "Chopper", 
        role: "Captain", 
        bounty: 1000 
    },
    { 
        name: "Nami", 
        role: "Navigator", 
        bounty: 366000000 
    },
    { 
        name: "Franky", 
        role: "Shipwright", 
        bounty: 394000000 
    },
    { 
        name: "Sanji", 
        role: "Chef", 
        bounty: 1032000000 
    }
]

const roles: string[] = ["Captain", "Swordsman", "Navigator", "Sharpshooter", "Chef", "Doctor", "Archaeologist", "Shipwright", "Musician", "Helmsman"];
const newlyAddedCrewmates: NewCrewmate[] = [];
let crewBounty: number = 1792001000;




function addToArray<Type>(arr: Type[], item: Type): Type[] {
    arr.push(item)
    return arr
}

function addNewCrewmate(newCrewmate: Crewmate): void {
    crew.push(newCrewmate);
}

function getCrewmateIndex(name: string): Crewmate {
    const index: number = crew.findIndex(x => x.name === name);
    return crew[index];
}

function addToNewlyAddedCrewmates(crewmate: Crewmate): NewCrewmate | undefined {
    const crewmateToAdd: NewCrewmate = { crewmate: crewmate, addedToTotalBounty: false };
    if (!crewmateToAdd) {
        console.error(`${crewmate.name} is not a crew member.`);
        return;
    }
    else {
        newlyAddedCrewmates.push(crewmateToAdd);
        return crewmateToAdd;
    }
}

function addNewCrewmateBounty(name: string): void | undefined {
    const index: number = newlyAddedCrewmates.findIndex(x => x.crewmate.name === name);
    if (!index) {
        console.error(`${name} is not a crew member.`);
        return;
    }
    else {
        crewBounty += newlyAddedCrewmates[index].crewmate.bounty;
        newlyAddedCrewmates[index].addedToTotalBounty = true;
    }
}

function getCrewmateDetails(crewmate: string): Crewmate | undefined {
    if (typeof crewmate === "string") {
        let index: number = -1;
        if (crewmate in roles) {
            index = crew.findIndex(x => x.role === crewmate);
        }
        else {
            index = crew.findIndex(x => x.name === crewmate);
        }

        if (!index) {
            console.error(`${crewmate} is not a crew member.`);
            return;
        }
        else {
            return crew[index];
        }
    } 
    else {
        throw new TypeError("Parameter 'crewmate' must be a string type.")
    }
}