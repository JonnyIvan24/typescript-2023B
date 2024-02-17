enum DoorState {
    Open = 100,
    Closed = 200,
}

function checkDoorState(state:DoorState) {
    console.log(state)

    switch (state) {
        case DoorState.Open:
            console.log('La puerta esta abierta')
            break
        case DoorState.Closed:
            console.log('La puerta esta cerrada')
            break
        default:
            break
    }
}

checkDoorState(100)
