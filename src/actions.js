import store from './store';

export const isHidden = () => {
    let bolean = store.getState().showing? false : true;
    store.setState({ showing: bolean });
    console.log('ingreseee', bolean);
}