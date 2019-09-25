

export default(theme) => ({
    header: {
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',
        minHeight: '80px',
        padding: '15px 30px',
	      background: theme.palette.colors.panelColor,
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
            color: theme.palette.colors.text,
            '& img': {
                height: '70px',
                width: '70px'
            }
        }
    },
	  themes: {
      display: 'flex',
      alignItems: 'center',
      '& h2': {
          paddingRight: '30px',
	        color: theme.palette.colors.text,
      }
    },
    switch: {
	    position: 'relative',
	    display: 'inline-block',
      width: '60px',
      height: '34px',
     '& input': {
	     opacity: 0,
       width: 0,
       height: 0,
       '&:checked + $slider': {
	       background: theme.palette.colors.mainColor,
       },
	     '&:focus + $slider': {
		     boxShadow: `0 0 1px ${theme.palette.colors.mainColor}`
	     },
	     '&:checked + $slider:before': {
		     transform: 'translateX(26px)'
	     },
     }
    },
	  slider: {
		  position: 'absolute',
      cursor: 'pointer',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: theme.palette.colors.mainColor,
      transition: '.4s',
      '&:before': {
	      position: 'absolute',
        content: '""',
        width: '26px',
        height: '26px',
        left: '4px',
        bottom: '4px',
        background: theme.palette.colors.panelColor,
        transition: '.4s',
      },
	  },
    round: {
	    borderRadius: '34px',
      '&:before': {
	      borderRadius: '50%',
      }
    }
})