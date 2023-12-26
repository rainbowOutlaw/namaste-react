const parent = React.createElement('div', {}, [
    React.createElement('h1', {}, "This is h1"),
    React.createElement('h2', {}, "This is h2")
]);
const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(parent);

