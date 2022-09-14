import NextLink from 'next/link';
import { m } from 'framer-motion';
// @mui
import { Box, Paper, Typography, CardActionArea } from '@mui/material';
// components
import Image from '../../../components/Image';
import { varHover, varTranHover } from '../../../components/animate';

export default function PageTransition({ href, name, imgPath, imgDesc, desc }) {
  return (
    <NextLink href={href} passHref>
      <Box
        sx={{
          mt: 4,
          width: '250px',

          gridTemplateColumns: { md: 'repeat(4, 1fr)' },
        }}
      >
        <Paper
          variant="outlined"
          sx={{ p: 1 }}
          onClick={() => {
            href === '#' ? alert('준비중입니다') : undefined;
          }}
        >
          <CardActionArea
            component={m.div}
            whileHover="hover"
            sx={{
              p: 3,
              borderRadius: '50%',
              color: 'primary.main',
              bgcolor: 'background.neutral',
            }}
          >
            <m.div variants={varHover(1.2)} transition={varTranHover()}>
              <Image src={imgPath} alt={imgDesc} effect="black-and-white" />
            </m.div>
          </CardActionArea>

          <Typography variant="subtitle1" sx={{ display: 'flex', justifyContent: 'center', mt: 1, p: 1 }}>
            {name}
          </Typography>
          <Typography variant="caption" sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
            {desc}
          </Typography>
        </Paper>
      </Box>
    </NextLink>
  );
}
