type TimeProps = {
  date: string;
  className?: string;
}

function Time({className, date}: TimeProps): JSX.Element {
  const instance: Date = new Date(date);
  const attr: string = date.split('T')[0];
  const content: string = instance.toLocaleDateString('en-EN', { month: 'long', year: 'numeric'});

  return <time className={className} dateTime={attr}>{content}</time>;
}

export default Time;
