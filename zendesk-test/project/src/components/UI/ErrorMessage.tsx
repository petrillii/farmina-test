import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="bg-error-50 border border-error-200 rounded-lg p-6 flex items-center">
      <AlertTriangle className="h-6 w-6 text-error-500 mr-4 flex-shrink-0" />
      <div>
        <h3 className="text-lg font-medium text-error-700 mb-1">Error</h3>
        <p className="text-error-600">{message}</p>
      </div>
    </div>
  );
};