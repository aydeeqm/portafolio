import store from './store';

export const isHidden = () => {
    let bolean = store.getState().showing? false : true;
    store.setState({ showing: bolean });
    console.log('ingreseee', bolean);
}

export const clickit = () =>{
    const cambio = store.getState().isHide;
    const newStyle = cambio;
    store.setState({
        isHide: newStyle,
    });
    console.log('iconossss', newStyle);
}