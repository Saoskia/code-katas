function humanReadable(s) {
  sec = 0;
  min = 0;
  hrs = 0;
  
  if (s > 0) {
    if (s < 60) {
      sec = s;
    } else {
      min = Math.floor(s / 60);
      sec = Math.floor(s % 60);
    }
    if (min >= 60) {
      hrs = Math.floor(min / 60);
      min = Math.floor(min % 60);
    }
  } else {
    return "00:00:00";
  }

  return `${hrs.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}