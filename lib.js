/**
 * Custom error class for post-related operations
 * @extends Error
 */
export class PostError extends Error {
  /**
   * Creates a new PostError instance
   * @param {string|{message: string, statusCode?: number, details?: any, name?: string}} messageOrOptions - Error message string or options object
   * @param {string} messageOrOptions.message - Error message (required when using object)
   * @param {number} [messageOrOptions.statusCode=500] - HTTP status code
   * @param {any} [messageOrOptions.details=null] - Additional error details
   * @param {string} [messageOrOptions.name="PostError"] - Error name
   *
   * @example
   * // Using string message
   * throw new PostError("Something went wrong");
   *
   * @example
   * // Using options object with only required message
   * throw new PostError({
   *   message: "Validation failed"
   * });
   *
   * @example
   * // Using options object with additional properties
   * throw new PostError({
   *   message: "Validation failed",
   *   statusCode: 400,
   *   details: { field: "email", reason: "invalid format" }
   * });
   */
  constructor(messageOrOptions) {
    if (typeof messageOrOptions === "string") {
      super(messageOrOptions);
      this.name = "PostError";
      this.statusCode = 500;
      this.details = null;
    } else if (
      typeof messageOrOptions === "object" &&
      messageOrOptions?.message
    ) {
      const {
        message,
        statusCode = 500,
        details = null,
        name = "PostError",
      } = messageOrOptions;
      super(message);
      this.name = name;
      this.statusCode = statusCode;
      this.details = details;
    } else {
      throw new TypeError(
        "PostError requires either a string message or an object with a 'message' property",
      );
    }
  }
}
