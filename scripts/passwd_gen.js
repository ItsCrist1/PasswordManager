const LETTERS = "abcdefghijklmnopqrstuvwxyz";
const LETTERS_CAPS = LETTERS.toUpperCase();
const SYMBOLS = "@#$_&-+()/*\"':;!?{}[]\%^~`";

class PasswordGenProfile {
  constructor(size,useSpaces,useNums,useSyms,useCaps) {
    this.size = size;
    this.useSpaces = useSpaces;
    this.useNums = useNums
    this.useSyms = useSyms;
    this.useCaps = useCaps
  }

  static Default = new PasswordGenProfile(16,false,true,true,true);
}

function genRand(m) {
    return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0]/0xFFFFFFFF * m);
}

function genPasswd(profile = PasswordGenProfile.Default) {
    let passwd="", lc = '\0';

    for(let i=0; i < profile.size; i++) {
        let c;

        switch(Math.floor(genRand(4))) {
            case 0:
            if(Math.floor(genRand(2)) && profile.useCaps) c = LETTERS_CAPS[Math.floor(genRand(LETTERS.length))];
            else c = LETTERS[Math.floor(genRand(LETTERS.length))];
            break;

            case 1:
            if(profile.useNums) c = Math.floor(genRand(10));
            else i--;
            break;

            case 2:
            if(profile.useSyms) c = SYMBOLS[Math.floor(genRand(SYMBOLS.length))];
            else i--;
            break;

            case 3:
            if(profile.useSpaces && genRand(12)) c = ' ';
            else i--;
            break;
    }

    if(c == lc) i--;
        else if(c != undefined) {
            lc = c;
            passwd += c;
        }
    } return passwd;
}