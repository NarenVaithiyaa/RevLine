# Google Forms Integration Setup

## 📝 How to Set Up Google Forms for RevLine Registration

### Step 1: Create a Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click "Create a new form" or use the "+" button
3. Name your form: "RevLine Event Registration"

### Step 2: Add Form Questions

Add the following questions to your form:

1. **Name** (Short answer, Required)
   - Question: "Full Name"
   - Make it required

2. **Age** (Short answer, Required)
   - Question: "Age"
   - Make it required

3. **Contact Number** (Short answer, Required)
   - Question: "Contact Number"
   - Make it required

4. **Instagram ID** (Short answer, Optional)
   - Question: "Instagram ID (optional)"
   - Not required

5. **Why do you want to join?** (Paragraph, Required)
   - Question: "Why do you want to join RevLine?"
   - Make it required

6. **Event** (Multiple choice, Required)
   - Question: "Which event are you registering for?"
   - Options: "Session 1", "Session 2", "Session 3", etc.
   - Make it required

### Step 3: Customize Form Settings

1. Click the "Settings" gear icon
2. **General Tab:**
   - ✅ Collect email addresses
   - ✅ Limit to 1 response per person
   - ✅ Allow response editing

3. **Presentation Tab:**
   - ✅ Show progress bar
   - Add a custom confirmation message: "Thank you for registering with RevLine! We'll contact you soon with more details."

### Step 4: Style Your Form

1. Click the "Customize theme" palette icon
2. Choose colors that match your website (cyan/blue theme)
3. Upload the RevLine logo if you have one

### Step 5: Get the Form URL

1. Click "Send" button in the top right
2. Click the "Link" tab (chain icon)
3. **Copy the form URL**
4. It will look like: `https://docs.google.com/forms/d/e/1FAIpQLSe.../viewform`

### Step 6: Update Your Website Code

1. Open `src/components/EventCard.tsx`
2. Find this line:
   ```tsx
   const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";
   ```
3. Replace `YOUR_FORM_ID` with your actual form URL

4. Open `src/components/SpecialEventCard.tsx`
5. Do the same replacement there

### Step 7: Test the Integration

1. Start your development server: `npm run dev`
2. Go to the Upcoming Events page
3. Click "Register Now" on any event
4. Verify that your Google Form opens in a new tab

## 📊 Viewing Responses

To view form responses:
1. Open your Google Form
2. Click the "Responses" tab
3. You can view responses in the form or link to a Google Sheet

## 🎨 Optional: Create Separate Forms for Each Event

If you want different forms for different events:

1. Create multiple Google Forms (one for each session)
2. Update the code to use different URLs for different events:

```tsx
const getFormURL = (sessionNumber: number) => {
  const formURLs = {
    1: "https://docs.google.com/forms/d/e/FORM_ID_SESSION_1/viewform",
    2: "https://docs.google.com/forms/d/e/FORM_ID_SESSION_2/viewform",
    3: "https://docs.google.com/forms/d/e/FORM_ID_SESSION_3/viewform",
  };
  return formURLs[sessionNumber] || formURLs[1];
};

const handleRegisterClick = () => {
  window.open(getFormURL(event.sessionNumber), '_blank');
};
```

## ✅ Benefits of Google Forms

- ✅ Free and easy to set up
- ✅ Automatically stores responses in Google Sheets
- ✅ Mobile-friendly
- ✅ Spam protection
- ✅ Email notifications for new responses
- ✅ Data export options (CSV, Excel)
- ✅ Real-time response viewing

## 🎯 Current Status

✅ Backend server files deleted
✅ Registration form component removed  
✅ EventCard updated to open Google Forms
✅ SpecialEventCard updated to open Google Forms
🔄 **Next: Replace YOUR_FORM_ID with your actual Google Form URL**

Your registration system is now ready to use Google Forms!
