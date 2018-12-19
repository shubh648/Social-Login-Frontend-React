import Api from './api';
import {Host} from '../constants';

export default {
    ...new Api(Host)
}