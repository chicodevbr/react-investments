export default function Report({ children: report }) {
  const month = report.month;
  const year = report.year;
  const reportValue = parseFloat(report.value).toFixed(2);
  const percent = parseFloat(report.percent).toFixed(2);
  const strPercent = percent > 0 ? '+' + percent : percent;

  const bgColor =
    percent > 0 ? 'text-yellow-400' : percent < 0 ? 'text-red-400' : '';
  const months = [
    'jan',
    'fev',
    'mar',
    'abr',
    'mai',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez',
  ];

  return (
    <div className="flex flex-row border-b border-gray-200 items-center">
      <p className="mr-5 text-sm font-mono">
        {months[month - 1]}/{year}
      </p>
      <p className={bgColor}>R$ {reportValue}</p>
      <p className={'ml-auto text-sm font-semibold ' + bgColor}>
        {strPercent}%
      </p>
    </div>
  );
}
