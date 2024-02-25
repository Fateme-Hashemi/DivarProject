const SetCookie = token => {
    document.cookie = `accessToken=${token.accessToken}; max-age=${1*24*60*60}`;

    document.cookie = `refreshToken=${token.refreshToken}; max-age=${30*24*60*60}`;
}

export {SetCookie};