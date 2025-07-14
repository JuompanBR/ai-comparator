import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
} from '@mui/material';
import { Send } from 'lucide-react';
import { FeedbackFormType } from '../types';
import { useState } from 'react';

const FeedbackForm: React.FC<FeedbackFormType> = ({ open = true, onConfirm, onCancel }) => {
    return (
        <Dialog open={open} onClose={onCancel} maxWidth="xs" fullWidth>
            <form onSubmit={(e) => { e.preventDefault(); onConfirm?.(); }}>
                <DialogTitle className="text-slate-800 text-center">Anonymous Feedback</DialogTitle>
                <DialogContent>
                    <FormControl
                        color="warning"
                        fullWidth
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                    >
                        <FormLabel
                            id="feedback-type-label"
                            sx={{ color: 'text.secondary' }}
                            className="!text-sm"
                        >
                            Request for:
                        </FormLabel>
                        <input type="radio" name="feedback-type" value="" style={{ display: 'none' }} required />
                        <RadioGroup
                            row
                            aria-labelledby="feedback-type-label"
                            name="feedback-type"
                            sx={{ gap: 2 }}
                        >
                            <FormControlLabel
                                value="featureRequest"
                                control={
                                    <Radio
                                        sx={{
                                            color: 'black',
                                            '&.Mui-checked': { color: 'black' },
                                        }}
                                    />
                                }
                                label="Ask a new functionality"
                            />
                            <FormControlLabel
                                value="newCriteriaAndAI"
                                control={
                                    <Radio
                                        sx={{
                                            color: 'black',
                                            '&.Mui-checked': { color: 'black' },
                                        }}
                                    />
                                }
                                label="Add criteria/AI"
                            />
                        </RadioGroup>

                        <FormLabel sx={{ color: 'text.secondary' }} className="!text-sm">
                            Write your message
                        </FormLabel>
                        <TextField
                            color="warning"
                            multiline
                            rows={4}
                            placeholder="Message..."
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button
                        type="submit"
                        color="warning"
                        variant="contained"
                        sx={{ display: 'flex', gap: 1, alignItems: 'center' }}
                    >
                        <span>Forward</span>
                        <Send strokeWidth={1.5} size={20} />
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default FeedbackForm;
