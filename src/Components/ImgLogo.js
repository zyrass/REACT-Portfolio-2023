// Dépendances
import React from "react";

function ImgLogo(props: any) {
    const {
        source,
        textAlternatif,
        sizes,
        top,
        right,
        zIndex,
        absolute,
        relative,
    } = props;
    return (
        <img
            src={source}
            alt={textAlternatif}
            style={{
                width: sizes + "px",
                position: (absolute && "absolute") || (relative && "relative"),
                top: top && top + "px",
                right: right && right + "px",
                zIndex: zIndex && 1,
            }}
        />
    );
}

export default ImgLogo;