import e from"react";import{useDispatch as t,useSelector as r,Provider as n}from"react-redux";import{createSlice as c,configureStore as o}from"@reduxjs/toolkit";var i=c({name:"button",initialState:{clicked:!1},reducers:{toggle:function(e){e.clicked=!e.clicked}}}),u=i.actions.toggle,l=o({reducer:{button:i.reducer}}),a=function(){var n=t(),c=r((function(e){return e.button.clicked}));return e.createElement("button",{onClick:function(){return n(u())},style:{padding:"10px",background:c?"green":"gray"}},c?"Clicked!":"Click Me")},d=function(t){var r=t.children;return e.createElement(n,{store:l},r)};export{d as MyButtonPackage,a as ZButton};
//# sourceMappingURL=index.esm.js.map
