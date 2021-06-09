import { alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default function alertMsg() {
  alert({
    title: 'More than ten',
    text: 'To many matches found. Please enter a more specific query!',
  });
}
