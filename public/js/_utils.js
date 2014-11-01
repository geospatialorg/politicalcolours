function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function getName(d) {
    return d === 1 ? 'UNIUNEA BULGARĂ DIN BANAT - ROMÂNIA' :
        d === 2 ? 'ALIANȚA CIVICĂ DEMOCRATĂ A ROMILOR' :
        d === 3 ? 'PARTIDUL NAȚIONAL DEMOCRAT CREȘTIN' :
        d === 4 ? 'UNIUNEA CROAȚILOR DIN ROMÂNIA' :
        d === 5 ? 'PARTIDUL ROMÂNIA MARE' :
        d === 6 ? 'ASOCIAȚIA PARTIDA ROMILOR "PRO-EUROPA"' :
        d === 7 ? 'ASOCIAȚIA ITALIENILOR DIN ROMÂNIA - RO.AS.IT.' :
        d === 8 ? 'UNIUNEA UCRAINENILOR DIN ROMÂNIA' :
        d === 9 ? 'FORUMUL DEMOCRAT AL GERMANILOR DIN ROMÂNIA' :
        d === 10 ? 'UNIUNEA POLONEZILOR DIN ROMÂNIA' :
        d === 11 ? 'PARTIDUL POPORULUI' :
        d === 12 ? 'UNIUNEA ELENĂ DIN ROMÂNIA' :
        d === 13 ? 'PARTIDUL POPULAR' :
        d === 14 ? 'PARTIDUL SOCIALIST ROMÂN' :
        d === 15 ? 'PARTIDUL DEMOCRAT LIBERAL' :
        d === 16 ? 'MIȘCAREA CREȘTIN-LIBERALĂ' :
        d === 17 ? 'ALIANȚA PENTRU ARGEȘ ȘI MUSCEL' :
        d === 18 ? 'ALIANȚA PENTRU BACĂU' :
        d === 19 ? 'MIȘCAREA PENTRU BOTOȘANI' :
        d === 20 ? 'ALIANȚA PENTRU VIITORUL BRĂILEI' :
        d === 21 ? 'ALIANȚA POPULAR-CREȘTINĂ' :
        d === 22 ? 'ALIANȚA CIVICĂ PENTRU COMUNITATE' :
        d === 23 ? 'ALIANȚA PENTRU PROGRES' :
        d === 24 ? 'MIȘCAREA PENTRU NOUL GIURGIU' :
        d === 25 ? 'UNIUNEA SOCIAL POPULARĂ' :
        d === 26 ? 'MIȘCAREA PENTRU NOUL MEHEDINȚI' :
        d === 27 ? 'ALIANȚA ELECTORALĂ POPULARĂ PROGRESISTĂ EUROPEANĂ LIBERALĂ' :
        d === 28 ? 'ALIANȚA PENTRU TELEORMAN' :
        d === 29 ? 'ALIANȚA PENTRU VRANCEA' :
        d === 30 ? 'UNIUNEA POPULARĂ SOCIAL CREȘTINĂ' :
        d === 31 ? 'PARTIDUL NAȚIONAL LIBERAL' :
        d === 32 ? 'ALIANȚA DE CENTRU - DREAPTA PARTIDUL NAȚIONAL LIBERAL - PARTIDUL CONSERVATOR' :
        d === 33 ? 'PARTIDUL POPULAR ȘI AL PROTECȚIEI SOCIALE' :
        d === 34 ? 'UNIUNEA CULTURALĂ A RUTENILOR DIN ROMÂNIA' :
        d === 35 ? 'FORȚA CIVICĂ' :
        d === 36 ? 'PARTIDUL CIVIC MAGHIAR - MAGYAR POLGÁRI PÁRT' :
        d === 37 ? 'ALIANȚA PARTIDUL POPULAR EUROPEAN (CREȘTINI DEMOCRAȚI) ȘI DEMOCRAȚII EUROPENI - PPE - DE' :
        d === 38 ? 'UNIUNEA DEMOCRATĂ MAGHIARĂ DIN ROMÂNIA' :
        d === 39 ? 'PARTIDUL SOCIAL DEMOCRAT AL MUNCITORILOR - PSDM' :
        d === 40 ? 'PARTIDUL ALIANȚA SOCIALISTĂ' :
        d === 41 ? 'UNIUNEA SOCIAL ECOLOGISTĂ' :
        d === 42 ? 'PARTIDUL UNIUNEA ECOLOGISTĂ DIN ROMÂNIA' :
        d === 43 ? 'PARTIDUL "TOTUL PENTRU ȚARĂ"' :
        d === 44 ? 'UNIUNEA DEMOCRATICĂ A SLOVACILOR ȘI CEHILOR DIN ROMÂNIA' :
        d === 45 ? 'ASOCIAȚIA MACEDONENILOR DIN ROMÂNIA' :
        d === 46 ? 'PARTIDUL NOUA GENERAȚIE CREȘTIN DEMOCRAT' :
        d === 47 ? 'PARTIDUL ECOLOGIST ROMÂN' :
        d === 48 ? 'UNIUNEA PENTRU TIMIȘ' :
        d === 49 ? 'PARTIDUL NAȚIONAL ȚĂRĂNESC CREȘTIN DEMOCRAT' :
        d === 50 ? 'PARTIDUL VERDE' :
        d === 51 ? 'ALIANȚA PENTRU MUREȘ' :
        d === 52 ? 'ALIANȚA PENTRU CONSTANȚA' :
        d === 53 ? 'ERDÉLYI MAGYAR NÉPPÁRT - PARTIDUL POPULAR MAGHIAR DIN TRANSILVANIA' :
        d === 54 ? 'ALIANȚA PENTRU SĂLAJ' :
        d === 55 ? 'UNIUNEA DEMOCRATĂ TURCĂ DIN ROMÂNIA' :
        d === 56 ? 'PARTIDUL CONSERVATOR' :
        d === 57 ? 'PARTIDUL POPORULUI - DAN DIACONESCU' :
        d === 58 ? 'PARTIDUL ROMÂNIEI EUROPENE' :
        d === 59 ? 'UNIUNEA NAȚIONALĂ A COMUNITĂȚILOR DE RROMI' :
        d === 60 ? 'COMUNITATEA RUȘILOR LIPOVENI DIN ROMÂNIA' :
        d === 61 ? 'PARTIDUL SOCIAL DEMOCRAT' :
        d === 62 ? 'UNIUNEA SOCIAL LIBERALĂ' :
        d === 63 ? 'UNIUNEA NAȚIONALĂ PENTRU PROGRESUL ROMÂNIEI' :
        d === 64 ? 'UNIUNEA DEMOCRATĂ A TĂTARILOR TURCO-MUSULMANI DIN ROMÂNIA' :
        d === 65 ? 'UNIUNEA SÂRBILOR DIN ROMÂNIA' :
        d === 66 ? 'ALTERNATIVA CIVICĂ ARĂDEANĂ' :
        d === 67 ? 'ALIANȚA ELECTORALĂ PSD+PNL MEHEDINȚI' :
        d === 68 ? 'PARTIDUL PRODEMO' :
        d === 69 ? 'FEDERAȚIA COMUNITĂȚILOR EVREIEȘTI DIN ROMÂNIA' :
        d === 70 ? 'EMNP-MPP' :
        d === 71 ? 'ALIANȚA PENTRU IAȘI' :
        d === 72 ? 'ALIANȚA ROMÂNEASCĂ HARGHITA' :
        d === 73 ? 'ALIANȚA ELECTORALĂ PSD-PNL VÂLCEA' :
        d === 74 ? 'ALIANȚA ELECTORALĂ PSD-PC VÂLCEA' :
        d === 75 ? 'ALIANȚA PENTRU VIITOR ÎN COMUNA PETRU-RAREȘ' :
        d === 76 ? 'UNIUNEA SOCIAL-LIBERALĂ CLUJ PSD+PNL' :
        d === 77 ? 'ALIANȚA ELECTORALĂ DINTRE ORGANIZAȚIA JUDEȚEANĂ PSD BRĂILA ȘI ORGANIZAȚIA JUDEȚEANĂ PNL BRĂILA' :
        d === 78 ? 'ALIANȚA PENTRU IALOMIȚA' :
        d === 79 ? 'ALIANȚA ELECTORALĂ PSD+PC DOLJ' :
        d === 80 ? 'UNIUNEA PENTRU BAIA MARE UNPR PDL' :
        d === 81 ? 'UNIUNEA PENTRU MARAMUREȘ PDL UNPR' :
        d === 82 ? 'ALIANȚA PENTRU NEGRILEȘTI' :
        d === 83 ? 'PARTIDUL RENAȘTEREA ROMÂNIEI' :
        d === 84 ? 'PARTIDUL REVOLUȚIEI ROMÂNE' :
        d === 86 ? 'FORȚA DEMOCRATĂ DIN ROMÂNIA' :
        d === 87 ? 'UNIUNEA INDEPENDENTĂ PENTRU SIGHIȘOARA' :
        d === 88 ? 'ALIANȚA PENTRU MEDGIDIA' :
        d === 89 ? 'UNIUNEA SOCIALIST PROGRESISTA ECO' :
        d === 90 ? 'ALIANȚA UNIȚI PENTRU TIMIȘOARA' :
        d === 91 ? 'ALIANȚA ELECTORALĂ PSD-PNL GRĂDIȘTEA' :
        d === 92 ? 'ALIANȚA ELECTORALĂ PSD-PNL FUNDENI' :
        d === 93 ? 'ALIANȚA ELECTORALĂ PARTIDUL SOCIAL DEMOCRAT-PARTIDUL NAȚIONAL LIBERAL' :
        d === 94 ? 'ALIANȚA PENTRU MOGOȘOIAIA' :
        d === 95 ? 'PARTIDUL NAȚIONAL LIBERAL + PARTIDUL POPORULUI' :
        d === 96 ? 'ALIANȚA PENTRU COMUNA NOASTRĂ' :
        d === 97 ? 'ALIANȚA PENTRU COMUNITATE' :
        d === 98 ? 'ALIANȚA ROMÂNIA DREAPTĂ' :
        d === 998 ? 'MINORITAȚI' :
        d === 999 ? 'CANDIDAT INDEPENDENT' : 'Fara corespondenta';
}

function getColor(d) {
    return d === 0 ? '#FCFF1E' :
        d === 1 ? '#008080' :
        d === 2 ? '#32CD32' :
        d === 3 ? '#00FF00' :
        d === 4 ? '#0000FF' :
        d === 5 ? '#FF00FF' :
        d === 6 ? '#3299CC' :
        d === 7 ? '#007FFF' :
        d === 8 ? '#FF1CAE' :
        d === 9 ? '#4F2F4F' :
        d === 10 ? '#8E236B' :
        d === 11 ? '#DB9370' :
        d === 12 ? '#EBC79E' :
        d === 13 ? '#ADEAEA' :
        d === 14 ? '#CFB53B' :
        d === 15 ? '#FFA500' :
        d === 16 ? '#F16913' :
        d === 17 ? '#C0D9D9' :
        d === 18 ? '#D9D919' :
        d === 19 ? '#D8BFD8' :
        d === 20 ? '#8C7853' :
        d === 21 ? '#97694F' :
        d === 22 ? '#FF2400' :
        d === 23 ? '#5959AB' :
        d === 24 ? '#A63603' :
        d === 25 ? '#FF4F00' :
        d === 26 ? '#527F76' :
        d === 27 ? '#70DB93' :
        d === 28 ? '#E47833' :
        d === 29 ? '#9F5F9F' :
        d === 30 ? '#D19275' :
        d === 31 ? '#FFFF00' :
        d === 32 ? '#A67D3D' :
        d === 33 ? '#5F9F9F' :
        d === 34 ? '#B5A642' :
        d === 35 ? '#B87333' :
        d === 36 ? '#8E2323' :
        d === 37 ? '#2F4F2F' :
        d === 38 ? '#238E23' :
        d === 39 ? '#DBDB70' :
        d === 40 ? '#C0C0C0' :
        d === 41 ? '#6F4242' :
        d === 42 ? '#4E2F2F' :
        d === 43 ? '#7FFF00' :
        d === 44 ? '#8C1717' :
        d === 45 ? '#8E6B23' :
        d === 46 ? '#DB70DB' :
        d === 47 ? '#8FBC8F' :
        d === 48 ? '#BC8F8F' :
        d === 49 ? '#EAADEA' :
        d === 50 ? '#00FFFF' :
        d === 51 ? '#5C4033' :
        d === 52 ? '#CD7F32' :
        d === 53 ? '#4A766E' :
        d === 54 ? '#4F4F2F' :
        d === 55 ? '#9932CD' :
        d === 56 ? '#4D4DFF' :
        d === 57 ? '#642d67' :
        d === 58 ? '#7093DB' :
        d === 59 ? '#855E42' :
        d === 60 ? '#545454' :
        d === 61 ? '#FF0000' :
        d === 62 ? '#235c81' :
        d === 63 ? '#7F00FF' :
        d === 64 ? '#32CD99' :
        d === 65 ? '#3232CD' :
        d === 66 ? '#E9C2A6' :
        d === 67 ? '#93DB70' :
        d === 68 ? '#426F42' :
        d === 69 ? '#9370DB' :
        d === 70 ? '#236B8E' :
        d === 71 ? '#238E68' :
        d === 72 ? '#DB7093' :
        d === 73 ? '#A68064' :
        d === 74 ? '#2F2F4F' :
        d === 75 ? '#23238E' :
        d === 76 ? '#FF6EC7' :
        d === 77 ? '#CDCDCD' :
        d === 78 ? '#8F8FBD' :
        d === 79 ? '#5C4033' :
        d === 80 ? '#38B0DE' :
        d === 81 ? '#871F78' :
        d === 82 ? '#5C3317' :
        d === 83 ? '#42426F' :
        d === 84 ? '#6B238E' :
        d === 85 ? '#D98719' :
        d === 86 ? '#215E21' :
        d === 87 ? '#EAEAAE' :
        d === 88 ? '#70DBDB' :
        d === 89 ? '#6B4226' :
        d === 90 ? '#A8A8A8' :
        d === 91 ? '#CC3299' :
        d === 92 ? '#2F4F4F' :
        d === 93 ? '#99CC32' :
        d === 94 ? '#00FF7F' :
        d === 95 ? '#4169E1' :
        d === 96 ? '#856363' :
        d === 97 ? '#000000' :
        d === 98 ? '#00009C' :
        d === 99 ? '#6B8E23' :
        d === 998 ? '#E6E8FA' :
        d === 999 ? '#E6E8FA' :
        '#E6E8FA';
}
