import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
import { Container, Box, Typography, Button, Paper } from '@mui/material';
import { CalendarIcon } from 'lucide-react';

function App() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    if (selectedDate) {
      console.log('Selected Date:', selectedDate.toLocaleDateString('fa-IR'));
      setShowResult(true);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
      <Container maxWidth="sm">
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              width: '100%',
              borderRadius: 2
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <CalendarIcon size={24} style={{ marginRight: '8px' }} />
              <Typography variant="h5" component="h1">
                انتخاب تاریخ تولد
              </Typography>
            </Box>

            <DatePicker
              label="تاریخ تولد"
              value={selectedDate}
              onChange={(newValue) => {
                setSelectedDate(newValue);
                setShowResult(false);
              }}
              sx={{ width: '100%', mb: 2 }}
            />

            <Button
              variant="contained"
              fullWidth
              onClick={handleSubmit}
              disabled={!selectedDate}
              sx={{ mt: 2 }}
            >
              ثبت تاریخ
            </Button>

            {showResult && selectedDate && (
              <Typography
                sx={{
                  mt: 3,
                  p: 2,
                  bgcolor: 'primary.light',
                  color: 'primary.contrastText',
                  borderRadius: 1,
                  textAlign: 'center'
                }}
              >
                تاریخ انتخاب شده: {selectedDate.toLocaleDateString('fa-IR')}
              </Typography>
            )}
          </Paper>
        </Box>
      </Container>
    </LocalizationProvider>
  );
}

export default App;