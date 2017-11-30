import store from './store';

export const isHidden = () => {
    const bolean = store.getState().showing;
    const newStyle = !bolean;
    store.setState({
        showing: newStyle,
    });
}

export const clickit = () =>{
    const bolean = store.getState().showing;
    const newStyle = !bolean;
    store.setState({
        showing: newStyle,
    });
}