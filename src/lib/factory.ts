export function transformTwoDigit(str: number | string) {
  const tstr = str.toString();

  return tstr.length === 2 ? tstr : `0${tstr}`;
}

export function formatNumber(num: number) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

// _____에러 처리 블럭________

type ErrorWithMessage = {
  message: string;
};

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    // 순환 참조와 같이 maybeError를 stringify하는 과정에서 발생하는
    // 에러에 대해 fallback을 제공한다
    return new Error(String(maybeError));
  }
}

// 에러 메세지 받아오기
export function getErrorMessage(error: unknown) {
  return toErrorWithMessage(error).message;
}

// ____________________
