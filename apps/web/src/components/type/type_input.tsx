import { cn } from '../../lib/utils';
import { useEffect, useMemo, useRef, useState } from 'react';

import Tooltip from '../ui/tooltip';

type TypeInputProps = {
  text: string;
  time: string;
};

const TypeInput = ({ text, time }: TypeInputProps) => {
  const [duration, setDuration] = useState<number | null>(null);
};
