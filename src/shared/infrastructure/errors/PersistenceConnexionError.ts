import ConstantError from '../../ConstantError'

export default class PersistenceConnexionError extends BaseError {

    constructor() {
        super(ConstantError.PERSISTENCE_CONNECTION)
    }
}