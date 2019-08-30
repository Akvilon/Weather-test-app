

export default {
    header: {
        minHeight: '80px',
        padding: '15px 30px',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
    logo: {
        display: 'flex',
        height: '80px',
        width: '100px',
        alignItems: 'flex-end',

        '& a':{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#333',
            '& img': {
                height: '70px',
                width: '65px'
            }
        }
    }
}