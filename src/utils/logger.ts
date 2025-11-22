type LogType = 'log' | 'warn' | 'error' | 'info';

interface LogEntry {
  type: LogType;
  message: string;
  timestamp: Date;
}

class Logger {
  private logs: LogEntry[] = [];
  private maxLogs: number = 1000;

  constructor() {
    this.overrideConsole();
  }

  private overrideConsole() {
    const originalConsole = { ...console };

    ['log', 'warn', 'error', 'info'].forEach((method) => {
      // @ts-ignore
      console[method] = (...args: any[]) => {
        try {
          const message = args.map(arg => {
            if (typeof arg === 'object') {
              try {
                return JSON.stringify(arg);
              } catch {
                return String(arg);
              }
            }
            return String(arg);
          }).join(' ');

          this.addLog({
            type: method as LogType,
            message,
            timestamp: new Date(),
          });
        } catch (e) {
          // Fail silently
        }
        // Call the original console method
        // @ts-ignore
        originalConsole[method](...args);
      };
    });
  }

  private addLog(entry: LogEntry) {
    this.logs.push(entry);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }
  }

  public getLogs() {
    return [...this.logs];
  }

  public clearLogs() {
    this.logs = [];
  }

  public log(message: string) {
    this.addLog({ type: 'log', message, timestamp: new Date() });
  }

  public warn(message: string) {
    this.addLog({ type: 'warn', message, timestamp: new Date() });
  }

  public error(message: string) {
    this.addLog({ type: 'error', message, timestamp: new Date() });
  }

  public info(message: string) {
    this.addLog({ type: 'info', message, timestamp: new Date() });
  }
}

const logger = new Logger();
export default logger;
