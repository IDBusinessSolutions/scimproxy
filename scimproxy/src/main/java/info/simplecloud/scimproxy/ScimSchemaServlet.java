package info.simplecloud.scimproxy;

import java.io.IOException;
import javax.servlet.http.*;

/*

GET:
curl -i -H "Accept: application/json" http://localhost:8080/Schema

 */

@SuppressWarnings("serial")
public class ScimSchemaServlet extends Authenticated {

	/**
	 * Schema only supports GET method.
	 */
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {

		// TODO: SPEC: REST: Return value of schema is TBD in specification. How does a JSON spec look like? Needs to be defined more.
		resp.setStatus(HttpServletResponse.SC_NOT_IMPLEMENTED);
	}

}
