/**
 * Simple template plugin
 *
 * Copyright (c) 2010 Filatov Dmitry (alpha@zforms.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @version 1.0.0
 */

$.jemplate = function(template, substs) {

	return template.replace(/\{\$([^}]+)\}/g, function(match, name) {
		var subst = substs[name];
		return typeof subst != 'undefined'? subst : '';
	});

};