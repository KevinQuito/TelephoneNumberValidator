function telephoneCheck(str) {
  /** ^ indicates the beginning of the string
   *  1? indicates if it matches the character 1, ? indicates the matches of 1 either zero or one times
   *  ( )? if it matches a space character zero or one times
   *  ((\( if it matchhes an open parenthesis
   *  (\d{3} if it matches a number [0-9] three times
   *  \)) if it matches a closed parenthesis
   *  | indicates as the boolean OR
   *  ( \d{3} ) if it matches a number [0-9] three times with a space in the beginning and end so for example " 123 " or " 456 "
   *  | indicates as the boolean OR
   *  (\d{3})) if it matches a number [0-9] three times
   *  ( |\-)? if it matches a space OR a dash zero or one times
   *  (\d{3}) if it matches a number [0-9] three times
   *  ( |\-)? if it matches a space OR a dash zero or one times
   *  (\d{4} if it matches a number [0-9] four times
   *  $ indicates the end of the string
   * 
   */
   return /^1?( )?((\(\d{3}\))|( \d{3} )|(\d{3}))( |\-)?(\d{3})( |\-)?(\d{4}$)/.test(str);  
}

telephoneCheck("555-555-5555");
