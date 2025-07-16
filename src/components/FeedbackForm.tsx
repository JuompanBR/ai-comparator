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
import { useTranslation } from 'react-i18next';

const FeedbackForm: React.FC<FeedbackFormType> = ({ open = true, onConfirm, onCancel }) => {

    const { t } = useTranslation();
    return (
        <Dialog open={open} onClose={onCancel} maxWidth="xs" fullWidth>
            <form onSubmit={(e) => { e.preventDefault(); onConfirm?.(); }}>
                <DialogTitle className="text-slate-800 text-center">{t("feedbackFormTitle")}</DialogTitle>
                <DialogContent>
                    <FormControl
                        color="warning"
                        fullWidth
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                    >
                        <FormLabel
                            id="feedback-type-label"
                            className="!text-sm !text-gray-500"
                        >
                            {t("feedbackFormRequestType")}
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
                                label={t("feedbackFormRequestType1")}
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
                                label={t("feedbackFormRequestType2")}
                            />
                        </RadioGroup>

                        <FormLabel className="!text-sm !text-gray-500">
                            {t("feedbackFormRequestMessageLabel")}
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
                    <Button
                        type="submit"
                        color="warning"
                        variant="contained"
                        className='float-right !mt-5 block relative'
                        sx={{ display: 'flex', gap: 1, alignItems: 'center' }}
                    >
                        <span>{t("feedbackFormRequestSubmit")}</span>
                        <Send strokeWidth={1.5} size={20} />
                    </Button>
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default FeedbackForm;
