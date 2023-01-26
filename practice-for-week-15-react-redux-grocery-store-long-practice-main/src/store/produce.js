import produceData from '../mockData/produce.json'


const POPULATE = 'produce/POPULATE'

export default function produceReducer(state={}, action) {
    const nextState = {...state}

    switch (action.type) {
        case POPULATE:
            return {...nextState, ...action.produce}
        default:
            return nextState;
    }
}

export const populateProduce = () => {
    // debugger
    return {
        type: POPULATE,
        produce: produceData
    }
}

