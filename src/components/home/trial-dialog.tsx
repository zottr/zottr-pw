import React, { forwardRef } from 'react'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Slide,
  SlideProps,
  Box,
} from '@mui/material'

// Slide transition component
const Transition = forwardRef(function Transition(props: SlideProps, ref: React.Ref<unknown>) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface TrialDialogProps {
  openDialog: boolean
  handleDialogClose: () => void
}

function TrialDialog({ openDialog, handleDialogClose }: TrialDialogProps) {
  return (
    <Dialog open={openDialog} onClose={handleDialogClose} TransitionComponent={Transition} keepMounted>
      <Box sx={{ p: { xs: 0, md: 2 } }}>
        <DialogTitle>
          <Typography
            sx={{
              fontSize: { xs: 18, md: 24 },
              fontWeight: 600,
              textTransform: 'none',
              color: 'grey.900',
            }}
          >
            Zottr’s still in Early Access — Join by Invite
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography
            sx={{
              fontSize: { xs: 16, md: 20 },
              fontWeight: 500,
              textTransform: 'none',
              color: 'grey.700',
            }}
          >
            Connect with us at <strong>hello@zottr.com</strong> to know more.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button size="large" onClick={handleDialogClose} autoFocus variant="contained">
            <Typography
              sx={{
                fontSize: { xs: 16, md: 22 },
                fontWeight: 500,
                textTransform: 'none',
                color: 'white',
              }}
            >
              OKAY
            </Typography>
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  )
}

export default TrialDialog
